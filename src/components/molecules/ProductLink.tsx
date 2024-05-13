import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductLink = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-white">Products</h1>
            <ul className="flex flex-col gap-4">
                <li>
                    <Link className="flex" to={'#'}>
                        <FaPlay />
                        <span className="text-white">Swap</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex" to={'#'}>
                        <FaPlay />
                        <span className="text-white">Support</span>
                    </Link>
                </li>
                <li>

                    <Link className="flex" to={'#'}>
                        <FaPlay />
                        <span className="text-white">Join Community</span>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default ProductLink