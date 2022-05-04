function Card(props) {
    return (
        <div style={{ width: '300px', boxShadow: '0 0 10px 10px #4441', height: 'min-content' }}>
            <img class="img" style={{ width: '100%' }} src={props.img} alt="" />
            <div style={{ padding: '10px' }}>
                <h1 class="title">{props.title}</h1>
                <p class="price">{props.price}</p>
                <p class="desc">{props.description}</p>
            </div>
            <button class="buy">Купить</button>
        </div>
    )
}

export default Card;