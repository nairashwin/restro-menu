import React from 'react'
interface MenuProps {
    items: {
        id: number,
        title: string,
        img: string,
        price: number,
        desc: string,
        category: string

    }[]
}
const Menu = ({ items }: MenuProps) => {
    // console.log(items);
    return (
        <div className="section-center">
            {items.map((menuItem) => {
                console.log(menuItem);
                const { id, title, img, desc,price } = menuItem;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo" />
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">{price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default Menu
