import { CORE_CONCEPTS } from '../helpers/helpers'
import Section from './Section';

function ListItem ({ image, title, description }){
  return (<li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>)
}  

export default function CoreConcept() {
  return (
        <Section title="Core Concepts" id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((item)=>(
                <ListItem key={item.title} {...item} />
            ))}
          </ul>
        </Section>
    );
  }