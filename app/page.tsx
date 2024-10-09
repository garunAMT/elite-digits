import VIPPhoneNumbers from '@/components/shared/VIPPhoneNumbers'

// Dummy data (to be replaced with database data later)
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

const categories = [
  { id: 1, name: 'Numberology Without 2 4 8', count: 5781 },
  { id: 2, name: 'PENTA NUMBERS', count: 354 },
  { id: 3, name: 'HEXA NUMBER', count: 351 },
  { id: 4, name: 'SEPTA (9XY AAA AAA A)', count: 105 },
  { id: 5, name: 'OCTA NUMBERS', count: 10 },
]

export default function Home() {
  return (
    <main className="container mx-auto p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">VIP Phone Numbers</h1>
      <VIPPhoneNumbers phoneNumbers={phoneNumbers} categories={categories} />
    </main>
  )
}