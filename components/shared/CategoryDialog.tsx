import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ListFilter } from "lucide-react"

interface Category {
  id: number
  name: string
  count: number
}

interface CategoryDialogProps {
  categories: Category[]
  selectedCategories: string[]
  handleCategoryChange: (categoryName: string) => void
}

export default function CategoryDialog({
  categories,
  selectedCategories,
  handleCategoryChange
}: CategoryDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <ListFilter className="mr-2 h-4 w-4" />
          Categories
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Categories</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px] pr-4">
          {categories.map(category => (
            <div key={category.id} className="flex items-center py-2">
              <Checkbox
                id={`mobile-category-${category.id}`}
                checked={selectedCategories.includes(category.name)}
                onCheckedChange={() => handleCategoryChange(category.name)}
              />
              <Label htmlFor={`mobile-category-${category.id}`} className="ml-2">
                {category.name} ({category.count})
              </Label>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}