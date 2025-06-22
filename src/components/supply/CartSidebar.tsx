"use client"

import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, Transition } from "@headlessui/react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart"
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"

export function CartSidebar() {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    removeItem, 
    updateQuantity, 
    getTotalItems, 
    getTotalPrice,
    clearCart 
  } = useCartStore()

  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={toggleCart} className="relative z-50">
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        {/* Sidebar */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                      <h2 className="text-lg font-semibold text-gray-900">
                        Shopping Cart ({totalItems})
                      </h2>
                      <button
                        onClick={toggleCart}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto py-6">
                      {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-center px-6">
                          <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Your cart is empty
                          </h3>
                          <p className="text-gray-500 mb-6">
                            Start shopping to add items to your cart
                          </p>
                          <Button
                            onClick={toggleCart}
                            className="bg-orange-500 hover:bg-orange-600 text-white"
                            asChild
                          >
                            <Link href="/supply">Browse Products</Link>
                          </Button>
                        </div>
                      ) : (
                        <div className="px-6 space-y-4">
                          {items.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                            >
                              {/* Product Image */}
                              <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              {/* Product Info */}
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-medium text-gray-900 truncate">
                                  {item.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">
                                  SKU: {item.sku}
                                </p>
                                <div className="text-sm font-semibold text-gray-900 mt-1">
                                  UGX {item.price.toLocaleString()}
                                </div>
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="w-8 text-center text-sm font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>

                              {/* Remove Button */}
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                      <div className="border-t border-gray-200 px-6 py-6 space-y-4">
                        {/* Subtotal */}
                        <div className="flex justify-between items-center text-lg font-semibold">
                          <span>Subtotal</span>
                          <span>UGX {totalPrice.toLocaleString()}</span>
                        </div>

                        {/* Shipping Notice */}
                        <p className="text-sm text-gray-500 text-center">
                          Free delivery in Kampala • Shipping calculated at checkout
                        </p>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                          <Button
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                            asChild
                          >
                            <Link href="/supply/checkout">
                              Checkout
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          
                          <Button
                            variant="outline"
                            className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
                            onClick={toggleCart}
                            asChild
                          >
                            <Link href="/supply/cart">View Cart</Link>
                          </Button>

                          <button
                            onClick={clearCart}
                            className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors"
                          >
                            Clear Cart
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 