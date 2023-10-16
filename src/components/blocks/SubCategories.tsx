import { useQuery } from "@tanstack/react-query"
import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { useCategory } from "src/hooks/useCategory"
import { ApiReturn, Category } from "src/types/site"

export default function SubCategories({
    parent, 
    parentSlug
  }:{
    parent:number, 
    parentSlug?:string
  }) { 
    const [subcategories, subcategoriesSet] = useState<Category[]>([]);
    let categoryStore                        = useCategory();
    useEffect(() => {
        subcategoriesSet(categoryStore.getSubCategories(parent))
      },[parent])  
  
  
    if (!subcategories.length)
      return <></>
    return (
      <div className="flex ">
        {subcategories.map(sc=><div className="category" key={sc.id}>
            <div><Link className="button" to={"/c/"+(parentSlug?`${parentSlug}/`:'')+sc.slug}>{sc.name}</Link></div>
        </div>)}
      </div>
    )
  }
  