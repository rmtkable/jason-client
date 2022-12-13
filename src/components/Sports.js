// var sports = [
//     {
//       id: "paycorStadium",
//       title: 'Paycor Stadium',
//       image: 'https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/article/hero/web-080822-bengals-getty.jpg',
//       description:"Paycor Stadium, previously known as Paul Brown Stadium, is an outdoor football stadium in Cincinnati, Ohio. It is the home venue of the Cincinnati Bengals of the National Football League and opened on August 19, 2000. ",
      
//     },

    
//     {
//       id: "gabp",
//       title: 'Great American Ball Park',
//       image: 'https://www.ballparksofbaseball.com/wp-content/uploads/2016/03/gab16951.jpg',
//       description: "Great American Ball Park is a baseball stadium in Cincinnati, Ohio. It served as the home stadium of the Cincinnati Reds of Major League Baseball, and opened on March 31, 2003, replacing Cinergy Field, the Reds' home field from 1970 to 2002."
//     },

//     {
//       id: "TQLStadium",
//       title: 'TQL Stadium',
//       image: 'https://media.bizj.us/view/img/12171144/tqlstadium2021-6*1200xx2000-1126-0-1267.jpg',
//       description: "TQL Stadium, called West End Stadium during construction, is a soccer-specific stadium in Cincinnati, Ohio. It is the home of FC Cincinnati, a Major League Soccer team that had been temporarily playing at Nippert Stadium."
//     },

//     {
//       id: "HeritageBankCenter",
//       title: 'Heritage Bank Center',
//       image: 'https://static.cycloneshockey.com/images/events/5d656fe4c73bb.png',
//       description: "Heritage Bank Center is an indoor arena located in downtown Cincinnati, next to the Great American Ball Park. It was completed in September 1975 and named Riverfront Coliseum because of its placement next to Riverfront Stadium."
//     },

//     {
//       id: "NippertStadium",
//       title: 'Nippert Stadium',
//       image: 'https://www.ttiionline.com/wp-content/uploads/2019/01/Nippert-Stadium-%E2%80%93-Cincinnati-OH.jpg',
//       description: "James Gamble Nippert Memorial Stadium is an outdoor stadium in Cincinnati, Ohio, on the campus of the University of Cincinnati. Primarily used for American football, it is the home field of the Cincinnati Bearcats football team."
//     },

//     {
//       id: "FifthThirdArena",
//       title: 'Fifth Third Arena',
//       image: 'https://gobearcats.com/images/2019/2/15/1DSH5508.jpg',
//       description: "Fifth Third Arena is an indoor arena in Cincinnati, Ohio, United States. The arena opened in 1989 and is located on the campus of the University of Cincinnati. It primarily serves as the home venue for the Cincinnati Bearcats men's basketball, women's basketball, and women's volleyball teams and hosts other events."
//     },

//       {
//         id: "UCBaseballStadium",
//         title: 'UC Baseball Stadium',
//         image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.change.org%2Fp%2Fpresident-santa-j-ono-phd-university-of-cincinnati-change-the-name-of-marge-schott-stadium-d58a811f-bd55-4b98-a6c5-62f92cfbef05&psig=AOvVaw2a0yCtjrID1HyKnuxT0gMi&ust=1670944890998000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDm4Pew9PsCFQAAAAAdAAAAABAJ',
//         description: "UC Baseball Stadium is a baseball stadium in Cincinnati, Ohio, on the campus of the University of Cincinnati. It is the home field of the Cincinnati Bearcats. The stadium holds 3,085 people and opened in 2004."
//       },


//     {
//       id: "CintasCenter",
//       title: 'Cintas Center',
//       image: 'https://www.learfield.com/wp-content/uploads/2021/12/X-ANC.jpeg',
//       description: "The Cintas Center is a 10,250-seat multi-purpose arena and conference center at Xavier University in Cincinnati, Ohio. The arena officially opened in 2000 and was constructed through private donations as part of Xavier University's Century Campaign."
//     },

//     {
//       id: "CorcoranField",
//       title: 'Corcoran Field',
//       image: 'https://st.focusedcollection.com/9163412/i/1800/focused_171152164-stock-photo-alert-american-bulldog-standing-rock.jpg',
//       description: "Corcoran Field is a 1,600-seat soccer stadium located on the campus of Xavier University in Cincinnati, Ohio. It is part of the Xavier University Soccer Complex. It is home to the Xavier University men's and women's soccer teams, who compete in the Big East Conference."
//     }
    
//     ]

  
    
//     var postHTML = " "
  
 
  
// //-----------------------------------------
//     for (var i=0; i < sports.length; i++){
      
//         var heading = '<div class="product " class="container" class="row" class="col" ' + '"> <span  class="container" ><h4>' + sports[i].title + '</h4>'

//         var image = '<img class="imgSportsBorder" src="' + sports[i].image + '"/ id="shop-card-img">'

        

//         var description = '<div class=""><p class="descriptionText mb-5">'+ sports[i].description '

     

        
//         var concatThis = heading + image + description;
//         postHTML = postHTML + concatThis
//     }
//     document.getElementById('sports').innerHTML = postHTML

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Sport = (props) => {
  return (
    <div className="allSports">
      <div className="sportsCard">
        <div className="cardImage">
          <img style={{maxWidth: '700px', heigth: 'auto'}} className="sportImage" src={props.sport.image} alt="" />
        </div>
        <div>
          <div style={{marginTop: '25px', fontSize: '25px'}} className="text-heading">{props.sport.title}</div>
          <div style={{marginBottom: '100px', fontSize: '20px', maxWidth: '75%', textAlign: 'center', marginLeft: '20%', marginRight: '20%'}} className='description'>{props.sport.description}</div>
          
        </div>
      </div>
    </div>
  )
}

export default class Sports extends Component {
  constructor(props){
    super(props)
    this.state = {
      sports:[],
      loading: true
    };
  }
  componentDidMount() {
    axios.get("https://jason-new-api.onrender.com/sports")
    .then(response => {
      this.setState({
        sports: response.data,
        loading: false
      })
      console.log("This is a list of Cincinnati Sports Venues")
    })
    .catch((error) => {
      console.log(error)
    });
  }
  sportsList() {
    return this.state.sports.map((currentSport) => {
      return <Sport sport = {currentSport} key={currentSport._id} />
    })
  }


  render() {
    return (
      
        <div className="row">
          <div  className="sportsContainer">
            <h2 className="sportsHeader">Sports Venues</h2>
            <div className="sportsInnerContainer">
              {this.sportsList()}
            </div>
          </div>

        </div>
      
    )
  }
}