import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseDeatils = (props)=>{


    return(
        <Card className="expense-item">
            <div className="expense-item__location">{props.location}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount} Rs</div>
            </div> 
            <button onClick={(ele)=>{const rem = ele.target.parentElement;
                rem.remove();
            }} className='delete'>Delete</button>
        </Card>
    );
}
export default ExpenseDeatils;