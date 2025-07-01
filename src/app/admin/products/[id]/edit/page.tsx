'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { productApi } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { ArrowLeft, Save, Loader2, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { ImageUpload } from '@/components/admin/ImageUpload'

interface EditProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const router = useRouter()
  const { id: productId } = use(params)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [images, setImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    student_price: '',
    sku: '',
    product_type: '',
    subcategory: '',
    stock_quantity: '',
    stock_status: 'in_stock',
    features: '',
    is_active: true,
    is_featured: false,
  })

  useEffect(() => {
    if (productId) {
      console.log('Product ID from params:', productId)
      loadProduct()
    }
  }, [productId])

  const loadProduct = async () => {
    try {
      setError(null)
      console.log('Loading product with ID:', productId)
      
      // Try direct API call first to test
      const testResponse = await fetch(`/api/test-product?id=${productId}`)
      const testData = await testResponse.json()
      console.log('Test API response:', testData)
      
      const response = await productApi.getProductForAdmin(productId)
      console.log('Product API response:', response)
      
      if (response.success && response.data) {
        const prod = response.data
        setProduct(prod)
        setImages(prod.images || [])
        setFormData({
          name: prod.name || '',
          description: prod.description || '',
          price: prod.price?.toString() || '0',
          student_price: prod.student_price?.toString() || '',
          sku: prod.sku || '',
          product_type: prod.product_type || 'electronics',
          subcategory: prod.subcategory || '',
          stock_quantity: prod.stock_quantity?.toString() || '0',
          stock_status: prod.stock_status || 'in_stock',
          features: Array.isArray(prod.features) ? prod.features.join('\n') : '',
          is_active: prod.is_active !== false,
          is_featured: prod.is_featured || false,
        })
      } else {
        const errorMsg = response.error || 'Product not found'
        console.error('Product not found or error:', errorMsg)
        setError(errorMsg)
      }
    } catch (error) {
      console.error('Failed to load product:', error)
      setError(`Failed to load product: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const updates = {
        name: formData.name,
        description: formData.description,
        price: parseInt(formData.price) || 0,
        student_price: formData.student_price ? parseInt(formData.student_price) : null,
        sku: formData.sku || undefined,
        product_type: formData.product_type,
        subcategory: formData.subcategory,
        stock_quantity: parseInt(formData.stock_quantity) || 0,
        stock_status: formData.stock_status,
        features: formData.features.split('\n').filter(f => f.trim()),
        images: images,
        is_active: formData.is_active,
        is_featured: formData.is_featured,
      }

      console.log('🚀 Submitting product update:', {
        productId,
        imagesCount: images.length,
        images: images,
        updates
      })

      const response = await productApi.updateProduct(productId, updates)
      
      console.log('📝 Update response:', response)
      
      if (response.success) {
        alert('Product updated successfully!')
        // Reload the product to see the changes
        await loadProduct()
      } else {
        alert('Failed to update product: ' + response.error)
      }
    } catch (error) {
      console.error('Update product error:', error)
      alert('Failed to update product')
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const updateStock = async () => {
    const newQuantity = parseInt(formData.stock_quantity) || 0
    const notes = prompt('Add a note for this stock update (optional):')
    
    try {
      const response = await productApi.updateStock(
        productId,
        newQuantity,
        'manual',
        notes || undefined
      )
      
      if (response.success) {
        alert('Stock updated successfully')
      } else {
        alert('Failed to update stock: ' + response.error)
      }
    } catch (error) {
      console.error('Stock update error:', error)
    }
  }

  const handleDeleteProduct = async () => {
    if (!product) return
    
    try {
      setDeleting(true)
      const response = await productApi.deleteProduct(productId)
      
      if (response.success) {
        alert(`Product "${product.name}" has been deleted successfully.`)
        router.push('/admin/products')
      } else {
        alert(`Failed to delete product: ${response.error}`)
      }
    } catch (error) {
      console.error('Delete error:', error)
      alert('Failed to delete product')
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Error Loading Product</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500 mb-4">Product ID: {productId}</p>
          <Link href="/admin/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
          <Link href="/admin/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Debug Information - Temporary */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-800">Debug Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Product ID:</strong> {productId}</p>
            <p><strong>Images in state:</strong> {images.length} images</p>
            <div className="bg-gray-100 p-2 rounded text-xs">
              <strong>Image URLs:</strong>
              <pre>{JSON.stringify(images, null, 2)}</pre>
            </div>
            <p><strong>Product Images from DB:</strong> {product?.images?.length || 0} images</p>
            <div className="bg-gray-100 p-2 rounded text-xs">
              <strong>DB Image URLs:</strong>
              <pre>{JSON.stringify(product?.images || [], null, 2)}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/products">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Product</h1>
          <p className="text-gray-600">Update product information for: {product.name}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input
                  id="sku"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product_type">Product Type</Label>
                <Select 
                  value={formData.product_type} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, product_type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="development-board">Development Board</SelectItem>
                    <SelectItem value="microcontroller">Microcontroller</SelectItem>
                    <SelectItem value="sensor">Sensor</SelectItem>
                    <SelectItem value="tool">Tool</SelectItem>
                    <SelectItem value="educational">Educational Kit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subcategory">Subcategory</Label>
                <Input
                  id="subcategory"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Regular Price (UGX) *</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="student_price">Student Price (UGX)</Label>
                <Input
                  id="student_price"
                  name="student_price"
                  type="number"
                  value={formData.student_price}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inventory */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="stock_quantity">Stock Quantity</Label>
                <div className="flex gap-2">
                  <Input
                    id="stock_quantity"
                    name="stock_quantity"
                    type="number"
                    value={formData.stock_quantity}
                    onChange={handleChange}
                  />
                  <Button type="button" variant="outline" onClick={updateStock}>
                    Update Stock
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stock_status">Stock Status</Label>
                <Select 
                  value={formData.stock_status} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, stock_status: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in_stock">In Stock</SelectItem>
                    <SelectItem value="low_stock">Low Stock</SelectItem>
                    <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                    <SelectItem value="discontinued">Discontinued</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Images */}
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageUpload
              images={images}
              onChange={setImages}
              maxImages={5}
            />
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="features">Product Features (one per line)</Label>
              <Textarea
                id="features"
                name="features"
                value={formData.features}
                onChange={handleChange}
                rows={5}
                placeholder="Enter each feature on a new line"
              />
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <Card>
          <CardHeader>
            <CardTitle>Status & Visibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="is_active">Active</Label>
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, is_active: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="is_featured">Featured Product</Label>
              <Switch
                id="is_featured"
                checked={formData.is_featured}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, is_featured: checked }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-between">
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" type="button" disabled={deleting}>
                  {deleting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Product
                    </>
                  )}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Product</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete "{product.name}"? This will mark the product as inactive but preserve its data for historical purposes. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteProduct}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Delete Product
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          
          <div className="flex gap-4">
            <Link href="/admin/products">
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
} 