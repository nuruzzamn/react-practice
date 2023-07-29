//const todoTitle = " Todo Title"
//const todoDes ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, in.";
// const date = new Date();
// const currentDate = date.getDate();
// const currentMonth = String(date.getMonth() + 1);
// const currentYear = date.getFullYear();
// const currentMinute = date.getMinutes()
// const currentHour = date.getHours();
// const currenAmPm = currentHour >= 12 ? "PM" : "AM";

//create a component for multiple card
function Card(props) {

   //destructuring
   const {titleText, desText, desDate}=props;

   return <div className='card'>
      <h3 className='cardTitle'>{titleText}</h3>
      <p className='cardDes'>{desText}</p>
      <p className='cardFooter'>{desDate}</p>
   </div>
}

export default Card;