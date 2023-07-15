

export default function Product(props) {
    return (
        <div className="row product">
            <div className="col-md-2">
                <img src={props.img} alt={props.name} />
            </div>
            <h2 className="col-md-4">{props.name}</h2>
            <p className="col-md-4">{props.impactScore}</p>
            <p className="col-md-2">{props.price}$</p>
        </div>
    );
}