import React from 'react';
import WithIconTimeLineItem from 'components/timeline/WithIconTimeLineItem';
const timeLineData = [
  {
      image: 'http://via.placeholder.com/150x150',
      time: 'Your first post!!',
      title: 'Welcome to Launch Rocket TimeLine',
      description: 'This is your first task, once completed, you can continue with the other ones',
  }, {
      image: 'http://via.placeholder.com/150x150',
      time: 'Learning Marketing',
      title: 'Completed first 50 projects',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here,',
  }, {
      image: 'http://via.placeholder.com/150x150',
      time: 'Get a domain',
      title: 'Facebook Groups',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
  }, {
      image: 'http://via.placeholder.com/150x150',
      time: '18 SEPT, 1984',
      title: 'Best builder award from usa builder board',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
  }, {
      image: 'http://via.placeholder.com/150x150',
      time: '30 NOV, 1985',
      title: 'completed first 100 projects',
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  }
];
const TimeLine = ({match}) => {
    return (
        <div>
            <div className="timeline-section timeline-center clearfix animated slideInUpTiny animation-duration-3">
                <WithIconTimeLineItem timeLine={timeLineData[0]} color="orange" hasButton={true}>
                    <span className="d-block text-white"><i className="zmdi zmdi-play"/></span>
                </WithIconTimeLineItem>
                <WithIconTimeLineItem 
                styleName="timeline-inverted" 
                timeLine={timeLineData[1]} 
                color="grey"
                isCompleted={true}
                >
                    <span className="d-block text-white"><i className="zmdi zmdi-time"/></span>
                </WithIconTimeLineItem>
                <WithIconTimeLineItem timeLine={timeLineData[2]} color="grey">
                    <span className="d-block text-white"><i className="zmdi zmdi-time"/></span>
                </WithIconTimeLineItem>
                <WithIconTimeLineItem styleName="timeline-inverted" timeLine={timeLineData[3]} color="grey">
                    <span className="d-block text-white"> <i className="zmdi zmdi-time"/></span>
                </WithIconTimeLineItem>
                <WithIconTimeLineItem timeLine={timeLineData[4]} color="grey">
                    <span className="d-block text-white"> <i className="zmdi zmdi-time"/></span>
                </WithIconTimeLineItem>
            </div>
        </div>
    )
};

export default TimeLine;
