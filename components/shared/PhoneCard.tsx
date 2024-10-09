import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart } from "lucide-react"

interface PhoneNumber {
  id: number
  number: string
  sumTotal: string
  price: number
  originalPrice: number
  category: string
}

interface PhoneCardProps {
  phone: PhoneNumber
}

export default function PhoneCard({ phone }: PhoneCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500  line-through">₹{phone.originalPrice}</p>
            <p className="text-2xl font-bold text-blue-600">₹{phone.price}</p>
          </div>
          <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <h3 className="text-2xl font-bold mt-4 text-gray-800">{phone.number}</h3>
        <p className="text-sm text-gray-600 mt-2">Sum Total = {phone.sumTotal}</p>
        <p className="text-xs text-gray-500 mt-1">{phone.category}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <Button variant="outline">Details</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Buy Now</Button>
      </CardFooter>
    </Card>
  )
}