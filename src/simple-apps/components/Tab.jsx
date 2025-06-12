import { EXAMPLES} from '../helpers/helpers'

export default function TabContent({selectedTopic}){
    if(selectedTopic){
        return(<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
          )
    }
    return(<div id="tab-content">
                <p>
                    Please select a topic.
                </p>
          </div>)
};