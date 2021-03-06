import React from 'react';
import WithIconTimeLineItem from 'components/timeline/WithIconTimeLineItem';
import ActivityModal from './activityModal';
const timeLineData = [
    {
        image: 'http://via.placeholder.com/150x150',
        time: 'Your first post!!',
        title: 'This is your first activity',
        description: 'This is your first task, once completed, you can continue with the other ones',
        canBeAccess: true,
        modalTask: true,
        taskData: {},
        id: 1
    }, {
        image: 'http://via.placeholder.com/150x150',
        time: 'Learning Marketing',
        title: 'First Rule of Marketing',
        description: 'Here you will learn the fundamentals of marketing',
        canBeAccess: true,
        taskData: {},
        modalTask: false,
        id: 2
    }, {
        image: 'http://via.placeholder.com/150x150',
        time: 'Get a domain',
        title: 'Facebook Groups',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
        canBeAccess: false,
        taskData: {},
        modalTask: false,
        id: 3
    }, {
        image: 'http://via.placeholder.com/150x150',
        time: '18 SEPT, 1984',
        title: 'Best builder award from usa builder board',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        canBeAccess: false,
        taskData: {},
        modalTask: false,
        id: 4
    }, {
        image: 'http://via.placeholder.com/150x150',
        time: '30 NOV, 1985',
        title: 'completed first 100 projects',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        canBeAccess: false,
        taskData: {},
        modalTask: false,
        id: 5
    }
];
class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activity: '',
        }
    }
    openModal = (activity) => {
        this.setState({
            isOpen: !this.state.isOpen,
            activity: activity
        })
    }
    render() {
        return (
            <div>
                {this.state.isOpen ? <ActivityModal
                    title="Launch Rocket Activity"
                    modal={this.state.isOpen}
                    handleToggle={this.openModal}
                    activity={this.state.activity}
                /> : ''}
                <div className="timeline-section timeline-center clearfix animated slideInUpTiny animation-duration-3">
                    {
                        timeLineData.map((activity, number) => {
                            const icon = activity.canBeAccess ? 'flaticon-file' : 'flaticon-time-1'
                            const color = activity.canBeAccess ? 'orange' : 'grey'
                            return (
                                (number % 2 === 0) ? <WithIconTimeLineItem timeLine={activity}
                                    canBeAccess={activity.canBeAccess}
                                    modalTask={activity.modalTask}
                                    color={color}
                                    buttonClick={() => this.openModal(activity.title)}
                                    buttonText="Start Modal"
                                    onclick={() => this.openModal(activity.title)}>
                                    <span className="d-block text-white">
                                        <i className={`zmdi ${icon}`} />
                                    </span>
                                </WithIconTimeLineItem> :
                                    <WithIconTimeLineItem
                                        styleName="timeline-inverted"
                                        timeLine={activity}
                                        canBeAccess={activity.canBeAccess}
                                        modalTask={activity.modalTask}
                                        buttonText="Start on Window"
                                        color={color}
                                        isCompleted={true}
                                    >
                                        <span className="d-block text-white"><i className={icon} /></span>
                                    </WithIconTimeLineItem>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
};

export default TimeLine;
