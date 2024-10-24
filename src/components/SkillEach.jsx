import defaultIcon from '../assets/image.png';

function SkillEach(props) {
  return (
    <div className="relative flex flex-row items-center space-x-3 p-3 rounded-lg shadow-md max-w-52 min-w-52 bg-slate-600 hover:bg-slate-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out group">
      <img src={props.icn1} alt={props.name} className="w-16 h-16 object-contain bg-inherit" />
      <h3 className="text-2xl font-medium text-gray-950 bg-inherit">{props.name}</h3>
      <div className="absolute bottom-full mb-2 w-32 text-center text-white bg-gray-800 rounded-md p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {props.skillLevel}
      </div>
    </div>
  );
}

SkillEach.defaultProps = {
  name: 'Default',
  icn1: defaultIcon,
  skillLevel: 'Beginner',
};

export default SkillEach;
