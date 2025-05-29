import React from 'react'
import { useParams } from 'react-router-dom';

const SubcategoryDetail  = () => {
    const { categoryId, subId } = useParams();
    console.log(categoryId , subId)

  return (
    <div>SubcategoryDetail </div>
  )
}

export default SubcategoryDetail 