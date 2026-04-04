import './Card.css';

export default function Card({ img, name, phone, email }) {
    return (
        <div className="card">
            <img
                src="https://via.placeholder.com/150"
                alt="Profile image"
            />
            <h2>Name: John Doe</h2>
            <p>phone: 123-456-7890</p>
            <p>email: john.doe@example.com</p>
        </div>
    )
}