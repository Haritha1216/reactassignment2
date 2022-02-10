import Faker from 'faker';

function Card(props){
    return(
        <div className="ui cards">
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" src={Faker.image.image()}/>
      <div className="header">
        {props.name}
      </div>
      <div className="meta">
       {props.location}
      </div>
      <div className="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  </div>
    )
}
function Card2(prop){
    return(
        <div className="ui cards">

        <div class="card">
    <div className="content">
      <img className="right floated mini ui image" src={Faker.image.image()}/>
      <div className="header">
        {prop.name}
      </div>
      <div className="meta">
        {prop.location}
      </div>
      <div className="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    <div className="extra content">
      <div  className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  </div>
    )
}

export {Card,Card2};