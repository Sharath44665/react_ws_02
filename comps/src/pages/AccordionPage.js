import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id:1,
            label:'Can i user react on project?',
            content:'React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix[a]. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[11][12] A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.'
        },
        {
            id:2,
            label:'Can i user js on project?',
            content:'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).'
        },
        {
            id:3,
            label:'Can i user css on project?',
            content:'CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.[4] This separation can improve content accessibility, since the content can be written without concern for its presentation; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.'
        }
    ];

    function myFunction (items, expandedIdx){
        return items.map((items, idx)=> {
            if(idx === expandedIdx){
                return 'expanded'
            }
            else{
                return 'collapsed'
            }
        })
    }
    return <div>
        <Accordion items={items} />
        
        </div>
}


export default AccordionPage;