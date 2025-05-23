import React from 'react'
import { useParams } from 'react-router-dom';

const SubcategoryDetail  = () => {
    const { categoryId, subId } = useParams();

  return (
    <div>SubcategoryDetail </div>
  )
}

export default SubcategoryDetail 