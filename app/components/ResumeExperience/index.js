import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import CardMembership from 'material-ui/svg-icons/action/card-membership';

const ContentWrapper = styled.div`
    max-width: 1024px;
    margin: 20px auto;
`;

// <CardTitle title={<span><CardMembership style={{ height: 40, width: 40, marginRight: 16 }} />Education</span>} />

const ResumeExperience = props => {
	return (
		<ContentWrapper>
			<Card style={{ margin: 8 }}>
				<CardHeader
					title="Nirma University"
					subtitle="May-2002 - April-2005"
					avatar="images/jsa-128.jpg"
				/>
				<CardText style={{ marginLeft: 56 }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
				<Divider inset={true} />
				<CardHeader
					title="Nirma University"
					subtitle="May-2002 - April-2005"
					avatar="images/jsa-128.jpg"
				/>
				<CardText style={{ marginLeft: 56 }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
				<Divider inset={true} />
				<CardHeader
					title="Nirma University"
					subtitle="May-2002 - April-2005"
					avatar="images/jsa-128.jpg"
				/>
				<CardText style={{ marginLeft: 56 }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
			</Card>
		</ContentWrapper>
	);
};

ResumeExperience.propTypes = {

};

export default ResumeExperience;