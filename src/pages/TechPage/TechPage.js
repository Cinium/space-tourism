import PageHeading from 'components/page-heading/PageHeading';
import './TechPage.css';
import TechSlide from 'components/slides/TechSlide';
import Slider from 'components/Slider/Slider';

const techPageData = [
	{
		term: 'LAUNCH VEHICLE',
		definition: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
	},
	{
		term: 'SPACEPORT',
		definition: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.`,
	},
	{
		term: 'SPACE CAPSULE',
		definition: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
	},
];

export default function TechPage() {
	return (
		<section className='tech-page'>
			<PageHeading span={'03'} classes={'tech__heading'}>
				SPACE LAUNCH 101
			</PageHeading>
			<Slider
				direction='vertical'
				data={techPageData}
				slideComponent={TechSlide}
				height={304}
			/>
		</section>
	);
}
