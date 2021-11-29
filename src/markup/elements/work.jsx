import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bg1 from '../../images/background/line-bg1.png';
import ptImg1 from '../../images/shap/circle-orange.png';
import ptImg2 from '../../images/shap/plus-orange.png';
import ptImg3 from '../../images/shap/circle-dots.png';
import { StyledAboutSection } from '../../styles/AboutSection.styled';
import { StyledHomeCard } from '../../styles/HomeCard.styled';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<StyledAboutSection className="section-area section-sp5 work-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:" no-repeat", backgroundPosition: "center", backgroundSize: "100%"}}>
					<div className="container-sm" style={{paddingTop: '50px'}}>
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary" >What We do</h6>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 mb-30">
								<StyledHomeCard className="work-bx">
									<div className="work-num-bx">01</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Identity Verification</h5>
										<p>Instantly verify international passports, Driver’s license, NIN etc. against our authorized government verified data banks for proper identification with certainty. </p>
									</div>
									<Link to="/services/identity" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</StyledHomeCard>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<StyledHomeCard className="work-bx">
									<div className="work-num-bx">02</div>
									<div className="work-content">
										<h5 style={{fontSize: "19px"}} className="title text-secondary mb-10">Employee Verification</h5>
										<p>Identify the people you work with  just to be sure they are who they say they are. From address/location verification to guarantor verification, we got you covered.</p>
									</div>
									<Link to="/services/kyc" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</StyledHomeCard>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<StyledHomeCard className="work-bx">
									<div className="work-num-bx">03</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Address Verification</h5>
										<p>Beyond physical documentation, uniquely identify address and locations of your people of interest. From loan to bonding, our data gives you an extra layer of reliability.</p>
									</div>
									<Link to="/services/address" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</StyledHomeCard>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 mb-30">
								<StyledHomeCard className="work-bx">
									<div className="work-num-bx">01</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Property Verification</h5>
										<p>Instantly verify international passports, Driver’s license, NIN etc. against our authorized government verified data banks for proper identification with certainty. </p>
									</div>
									<Link to="/services/identity" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</StyledHomeCard>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<StyledHomeCard className="work-bx">
									<div className="work-num-bx">02</div>
									<div className="work-content">
										<h5 style={{fontSize: "19px"}} className="title text-secondary mb-10">Guarantor Verification</h5>
										<p>Identify the people you work with  just to be sure they are who they say they are. From address/location verification to guarantor verification, we got you covered.</p>
									</div>
									<Link to="/services/kyc" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</StyledHomeCard>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<StyledHomeCard className="work-bx">
									<div className="work-num-bx">03</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Business Verification</h5>
										<p>Beyond physical documentation, uniquely identify address and locations of your people of interest. From loan to bonding, our data gives you an extra layer of reliability.</p>
									</div>
									<Link to="/services/address" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</StyledHomeCard>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate3" src={ptImg3} alt=""/>
				</StyledAboutSection>
				
			</>
		);
	}
}

export default aboutSection;