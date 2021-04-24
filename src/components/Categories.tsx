import React from 'react'
interface CategoriesProps {
    filterItems(category: string): void,
    categories: string[]
}
const Categories = ({ filterItems, categories }: CategoriesProps) => {
    return (
        <div className="btn-container">
            {categories.map((category:string,index) => {
                return <button key={index} className="filter-btn" onClick={()=>filterItems(category)}>{category}</button>
            })}
            {/* <button className="filter-btn" onClick={() => {
                filterItems("all")
            }}>all</button>
            <button className="filter-btn" onClick={() => {
                filterItems("shakes")
            }}>shakes</button> */}
        </div>
    );
}

export default Categories
