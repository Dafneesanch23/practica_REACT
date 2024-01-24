import Button from '../Button/button.jsx';
import './Navbar.css';


const Navbar = ({links}) => {
    //console.log(props);

    
    // const divStyle = {
    //     backgroundColor: 'red',
    //     width: '100vw',
    //     height: '150 px',
    // } esto ya no se necesita porque se creo un archivo css (Navbar)

return (

<div className='nav-container'>
    <div className='navbar'>
        {
            links.map(link => (
                <Button key={link.id} {...link}/>
            ))
        }
    </div> 
</div>
)
}

export default Navbar;