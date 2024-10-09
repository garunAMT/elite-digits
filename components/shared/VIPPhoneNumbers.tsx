'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import FilterDialog from './FilterDialog'
import CategoryDialog from './CategoryDialog'
import PhoneCard from './PhoneCard'

interface PhoneNumber {
  id: number
  number: string
  sumTotal: string
  price: number
  originalPrice: number
  category: string
}

interface Category {
  id: number
  name: string
  count: number
}

interface VIPPhoneNumbersProps {
  phoneNumbers: PhoneNumber[]
  categories: Category[]
}

function filterPhoneNumbers(phoneNumbers: PhoneNumber[], options: {
  searchTerm: string
  minPrice: string
  maxPrice: string
  selectedCategories: string[]
  sumTotal: string
}): PhoneNumber[] {
  return phoneNumbers.filter(phone => {
    const matchesSearch = phone.number.includes(options.searchTerm)
    const matchesPrice = (options.minPrice === '' || phone.price >= Number(options.minPrice)) &&
                         (options.maxPrice === '' || phone.price <= Number(options.maxPrice))
    const matchesCategory = options.selectedCategories.length === 0 || options.selectedCategories.includes(phone.category)
    const matchesSumTotal = options.sumTotal === '' || phone.sumTotal.includes(options.sumTotal)
    return matchesSearch && matchesPrice && matchesCategory && matchesSumTotal
  })
}

export default function VIPPhoneNumbers({ phoneNumbers, categories }: VIPPhoneNumbersProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sumTotal, setSumTotal] = useState('')
  const [filteredNumbers, setFilteredNumbers] = useState(phoneNumbers)

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    )
  }

  const resetFilters = () => {
    setSearchTerm('')
    setMinPrice('')
    setMaxPrice('')
    setSelectedCategories([])
    setSumTotal('')
  }

  useEffect(() => {
    setFilteredNumbers(filterPhoneNumbers(phoneNumbers, {
      searchTerm,
      minPrice,
      maxPrice,
      selectedCategories,
      sumTotal
    }))
  }, [phoneNumbers, searchTerm, minPrice, maxPrice, selectedCategories, sumTotal])

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left sidebar */}
      <div className="w-full lg:w-1/4 space-y-6 lg:sticky lg:top-4 lg:self-start">
        <Card className="p-4 lg:block hidden">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="sumTotal" className="text-sm font-medium">SUM TOTAL</Label>
              <Input
                id="sumTotal"
                type="text"
                placeholder="Enter Number Like 12 or 3"
                value={sumTotal}
                onChange={(e) => setSumTotal(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="minPrice" className="text-sm font-medium">Minimum Price</Label>
              <Input
                id="minPrice"
                type="number"
                placeholder="Minimum Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="maxPrice" className="text-sm font-medium">Maximum Price</Label>
              <Input
                id="maxPrice"
                type="number"
                placeholder="Maximum Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="mt-1"
              />
            </div>
            <Button onClick={resetFilters} className="w-full">Reset Filters</Button>
          </div>
        </Card>
        
        <Card className="p-4 lg:block hidden">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <div className="space-y-2">
            {categories.map(category => (
              <div key={category.id} className="flex items-center">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={selectedCategories.includes(category.name)}
                  onCheckedChange={() => handleCategoryChange(category.name)}
                />
                <Label htmlFor={`category-${category.id}`} className="ml-2 text-sm">
                  {category.name} ({category.count})
                </Label>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Main content */}
      <div className="w-full lg:w-3/4 space-y-6">
        <Card className="p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-2 w-full sm:w-auto lg:hidden">
              <FilterDialog
                sumTotal={sumTotal}
                setSumTotal={setSumTotal}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                resetFilters={resetFilters}
              />
              <CategoryDialog
                categories={categories}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Input
                type="text"
                placeholder="Start With"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
              <Button>SEARCH</Button>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredNumbers.map(phone => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </div>
  )
}