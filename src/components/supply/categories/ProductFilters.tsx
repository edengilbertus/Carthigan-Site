"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"

interface ProductFiltersProps {
  categories: any[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedSubcategory: string
  setSelectedSubcategory: (subcategory: string) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  availabilityFilter: string
  setAvailabilityFilter: (filter: string) => void
}

export function ProductFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
  priceRange,
  setPriceRange,
  availabilityFilter,
  setAvailabilityFilter
}: ProductFiltersProps) {
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory)
  
  const clearAllFilters = () => {
    setSelectedCategory("all")
    setSelectedSubcategory("all")
    setPriceRange([0, 1000000])
    setAvailabilityFilter("all")
  }

  const hasActiveFilters = selectedCategory !== "all" || selectedSubcategory !== "all" || availabilityFilter !== "all" || priceRange[0] > 0 || priceRange[1] < 1000000

  return (
    <div className="bg-surface rounded-3xl p-6 border border-outline-variant/20 sticky top-32">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-on-surface">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-primary hover:bg-primary/5"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <h4 className="font-semibold text-on-surface mb-3">Category</h4>
          <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="cat-all" />
              <Label htmlFor="cat-all" className="text-sm">All Categories</Label>
            </div>
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <RadioGroupItem value={category.id} id={`cat-${category.id}`} />
                <Label htmlFor={`cat-${category.id}`} className="text-sm">
                  {category.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator />

        {/* Subcategory Filter */}
        {selectedCategoryData && (
          <div>
            <h4 className="font-semibold text-on-surface mb-3">Subcategory</h4>
            <RadioGroup value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="subcat-all" />
                <Label htmlFor="subcat-all" className="text-sm">All Subcategories</Label>
              </div>
              {selectedCategoryData.subcategories.map((subcategory: any) => (
                <div key={subcategory.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={subcategory.id} id={`subcat-${subcategory.id}`} />
                  <Label htmlFor={`subcat-${subcategory.id}`} className="text-sm">
                    {subcategory.name}
                    <Badge className="ml-2 text-xs bg-surface-variant text-on-surface-variant">
                      {subcategory.productCount}
                    </Badge>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        <Separator />

        {/* Price Range Filter */}
        <div>
          <h4 className="font-semibold text-on-surface mb-3">Price Range (UGX)</h4>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              max={1000000}
              min={0}
              step={1000}
              className="mb-4"
            />
            <div className="flex justify-between text-sm text-on-surface/60">
              <span>UGX {priceRange[0].toLocaleString()}</span>
              <span>UGX {priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Availability Filter */}
        <div>
          <h4 className="font-semibold text-on-surface mb-3">Availability</h4>
          <RadioGroup value={availabilityFilter} onValueChange={setAvailabilityFilter}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="avail-all" />
              <Label htmlFor="avail-all" className="text-sm">All Products</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="in-stock" id="avail-in-stock" />
              <Label htmlFor="avail-in-stock" className="text-sm">In Stock</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low-stock" id="avail-low-stock" />
              <Label htmlFor="avail-low-stock" className="text-sm">Low Stock (≤10)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="out-of-stock" id="avail-out-stock" />
              <Label htmlFor="avail-out-stock" className="text-sm">Out of Stock</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        {/* Student Discount Info */}
        <div className="bg-success-container/20 rounded-2xl p-4">
          <h4 className="font-semibold text-success mb-2 text-sm">🎓 Student Discount</h4>
          <p className="text-xs text-success/80">
            Show your university ID for 15% off eligible items
          </p>
        </div>
      </div>
    </div>
  )
} 