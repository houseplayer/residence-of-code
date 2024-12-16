import prisma from "@/lib/prisma"
import { Category } from "@/types"

export const getCategories = async () => {
  const categories: Category[] = await prisma.category.findMany()

  return categories
}

export const mapCategories = (selectedCategories: Category[]) => {
  return selectedCategories.map((category) => category.name)
}
