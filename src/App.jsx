import Card from './components/Card'
 
 const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 weeks ago",
    post: "React Native Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 days ago",
    post: "Backend Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "6 weeks ago",
    post: "Cloud Engineer",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "9 days ago",
    post: "Database Administrator",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "12 days ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "7 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  }
];
console.log(jobOpenings);


   return (
     <div className='parent'>
       {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post}/>
        </div>
        
       })}
     </div>
   )
 }
 
 export default App
 


