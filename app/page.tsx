"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, Filter } from "lucide-react";

// Heart button
const HeartButton = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled((prev) => !prev);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-red-500 hover:text-red-600 hover:bg-red-50"
      onClick={handleClick}
    >
      {isFilled ? (
        <Heart fill="red" className="h-5 w-5" />
      ) : (
        <Heart className="h-5 w-5" />
      )}
    </Button>
  );
};

// Dummy data for phone numbers
const phoneNumbers = [
  {
    id: 1,
    number: "7030 117 333",
    sumTotal: "28-10-1",
    price: 11494,
    originalPrice: 12771,
    category: "Numberology Without 2 4 8",
  },
  {
    id: 2,
    number: "7030 119 333",
    sumTotal: "30-3-3",
    price: 11494,
    originalPrice: 12771,
    category: "Numberology Without 2 4 8",
  },
  {
    id: 3,
    number: "7030 711 333",
    sumTotal: "28-10-1",
    price: 11494,
    originalPrice: 12771,
    category: "Numberology Without 2 4 8",
  },
  {
    id: 4,
    number: "70303 66666",
    sumTotal: "43-7-7",
    price: 74999,
    originalPrice: 74999,
    category: "PENTA NUMBERS",
  },
  {
    id: 5,
    number: "70306 12345",
    sumTotal: "31-4-4",
    price: 44450,
    originalPrice: 44450,
    category: "HEXA NUMBER",
  },
  {
    id: 6,
    number: "7 0303 22222",
    sumTotal: "23-5-5",
    price: 87500,
    originalPrice: 87500,
    category: "SEPTA (9XY AAA AAA A)",
  },
  {
    id: 7,
    number: "7030 888 777",
    sumTotal: "42-6-6",
    price: 23500,
    originalPrice: 26000,
    category: "PENTA NUMBERS",
  },
  {
    id: 8,
    number: "7030 223 334",
    sumTotal: "23-5-5",
    price: 19999,
    originalPrice: 21000,
    category: "Numberology Without 2 4 8",
  },
  {
    id: 9,
    number: "7030 987 654",
    sumTotal: "33-6-6",
    price: 34000,
    originalPrice: 35000,
    category: "Numberology Without 2 4 8",
  },
  {
    id: 10,
    number: "70307 77777",
    sumTotal: "40-4-4",
    price: 75999,
    originalPrice: 75999,
    category: "PENTA NUMBERS",
  },
  {
    id: 11,
    number: "7 0303 55555",
    sumTotal: "25-7-7",
    price: 99999,
    originalPrice: 99999,
    category: "SEPTA (9XY AAA AAA A)",
  },
  {
    id: 12,
    number: "7030 654 321",
    sumTotal: "27-9-9",
    price: 38000,
    originalPrice: 39000,
    category: "HEXA NUMBER",
  },
  {
    id: 13,
    number: "7030 131 131",
    sumTotal: "21-3-3",
    price: 50000,
    originalPrice: 51500,
    category: "Numberology Without 2 4 8",
  },
  {
    id: 14,
    number: "7030 555 444",
    sumTotal: "33-6-6",
    price: 49000,
    originalPrice: 50000,
    category: "PENTA NUMBERS",
  },
  {
    id: 15,
    number: "7 0303 33333",
    sumTotal: "23-5-5",
    price: 85000,
    originalPrice: 85000,
    category: "SEPTA (9XY AAA AAA A)",
  },
  {
    id: 16,
    number: "7030 001 100",
    sumTotal: "12-3-3",
    price: 11000,
    originalPrice: 12500,
    category: "Numberology Without 2 4 8",
  },
  {
    id: 17,
    number: "7030 123 456",
    sumTotal: "27-9-9",
    price: 39999,
    originalPrice: 41000,
    category: "HEXA NUMBER",
  },
  {
    id: 18,
    number: "70307 88888",
    sumTotal: "39-12-3",
    price: 78999,
    originalPrice: 79999,
    category: "PENTA NUMBERS",
  },
  {
    id: 19,
    number: "7030 777 111",
    sumTotal: "30-3-3",
    price: 21000,
    originalPrice: 22500,
    category: "Numberology Without 2 4 8",
  },
  {
    id: 20,
    number: "70308 99999",
    sumTotal: "45-9-9",
    price: 99999,
    originalPrice: 99999,
    category: "PENTA NUMBERS",
  },
];

// Dummy data for categories
const categories = [
  { id: 1, name: "Numberology Without 2 4 8", count: 5781 },
  { id: 2, name: "PENTA NUMBERS", count: 354 },
  { id: 3, name: "HEXA NUMBER", count: 351 },
  { id: 4, name: "SEPTA (9XY AAA AAA A)", count: 105 },
  { id: 5, name: "OCTA NUMBERS", count: 10 },
];

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sumTotal, setSumTotal] = useState("");
  const [filteredNumbers, setFilteredNumbers] = useState(phoneNumbers);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedCategories([]);
    setSumTotal("");
  };

  useEffect(() => {
    const filtered = phoneNumbers.filter((phone) => {
      const matchesSearch = phone.number.includes(searchTerm);
      const matchesPrice =
        (minPrice === "" || phone.price >= Number(minPrice)) &&
        (maxPrice === "" || phone.price <= Number(maxPrice));
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(phone.category);
      const matchesSumTotal =
        sumTotal === "" || phone.sumTotal.includes(sumTotal);
      return (
        matchesSearch && matchesPrice && matchesCategory && matchesSumTotal
      );
    });
    setFilteredNumbers(filtered);
  }, [searchTerm, minPrice, maxPrice, selectedCategories, sumTotal]);

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left sidebar */}
        <div className="w-full lg:w-1/4 space-y-6">
          <Card className="p-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="sumTotal" className="text-sm font-medium">
                  SUM TOTAL
                </Label>
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
                <Label htmlFor="minPrice" className="text-sm font-medium">
                  Minimum Price
                </Label>
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
                <Label htmlFor="maxPrice" className="text-sm font-medium">
                  Maximum Price
                </Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="Maximum Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="hidden lg:block space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.name)}
                    onCheckedChange={() => handleCategoryChange(category.name)}
                  />
                  <Label
                    htmlFor={`category-${category.id}`}
                    className="ml-2 text-sm"
                  >
                    {category.name} ({category.count})
                  </Label>
                </div>
              ))}
            </div>
            <div className="lg:hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Select Categories
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Select Categories</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[400px] pr-4">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center py-2">
                        <Checkbox
                          id={`mobile-category-${category.id}`}
                          checked={selectedCategories.includes(category.name)}
                          onCheckedChange={() =>
                            handleCategoryChange(category.name)
                          }
                        />
                        <Label
                          htmlFor={`mobile-category-${category.id}`}
                          className="ml-2"
                        >
                          {category.name} ({category.count})
                        </Label>
                      </div>
                    ))}
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        </div>

        {/* Main content */}
        <div className="w-full lg:w-3/4 space-y-6">
          <Card className="p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button variant="outline" onClick={resetFilters}>
                Reset Filters
              </Button>
              <div className="flex gap-2 w-full sm:w-auto">
                <Input
                  type="text"
                  placeholder="Start With"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-40"
                />
                <Button>SEARCH</Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredNumbers.map((phone) => (
              <Card
                key={phone.id}
                className="overflow-hidden transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 line-through">
                        ₹{phone.originalPrice}
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        ₹{phone.price}
                      </p>
                    </div>
                    <HeartButton />
                  </div>
                  <h3 className="text-2xl font-bold mt-4 text-gray-800">
                    {phone.number}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Sum Total = {phone.sumTotal}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{phone.category}</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between items-center bg-gray-50">
                  <Button variant="outline">Details</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
