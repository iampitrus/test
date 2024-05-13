import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LegalLink = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className='text-white'>Legal</h1>
            <ul className="flex flex-col gap-4">
                <li>
                    <Link className="flex" to='#'>
                        <FaPlay />
                        <span className='text-white'>Privacy Policy</span>
                    </Link>
                </li>

                <li>
                    <Link className="flex" to='#'>
                        <FaPlay />
                        <span className='text-white'>Terms & Conditions</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex" to='#'>
                        <FaPlay />
                        <span className='text-white'>Our Team</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex" to='#'>
                        <FaPlay />
                        <span className='text-white'>FAQ</span>
                    </Link>
                </li>
            </ul>





        </div>
    )
}

export default LegalLink