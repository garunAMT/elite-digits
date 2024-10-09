import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Filter } from "lucide-react"

interface FilterDialogProps {
  sumTotal: string
  setSumTotal: (value: string) => void
  minPrice: string
  setMinPrice: (value: string) => void
  maxPrice: string
  setMaxPrice: (value: string) => void
  resetFilters: () => void
}

export default function FilterDialog({
  sumTotal,
  setSumTotal,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  resetFilters
}: FilterDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Options</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="sumTotal">Sum Total</Label>
            <Input
              id="sumTotal"
              value={sumTotal}
              onChange={(e) => setSumTotal(e.target.value)}
              placeholder="Enter Number Like 12 or 3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="minPrice">Minimum Price</Label>
            <Input
              id="minPrice"
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Minimum Price"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="maxPrice">Maximum Price</Label>
            <Input
              id="maxPrice"
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Maximum Price"
            />
          </div>
        </div>
        <Button onClick={resetFilters}>Reset Filters</Button>
      </DialogContent>
    </Dialog>
  )
}