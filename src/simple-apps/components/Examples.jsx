import { useState } from 'react'
import { BTN_LABEL } from '../helpers/helpers'
import TabBtn from './TabBtn'
import TabContent from './Tab'
import Section from './Section'

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    return(
        <Section title="Examples" id="examples">
          <menu>
          {BTN_LABEL.map((label)=>(<TabBtn
                                        key={label}
                                        isSelected={selectedTopic === `${label.toLowerCase()}`}
                                        onSelect={() => handleSelect(label.toLowerCase())}
                                    >
                                        {label}
                                    </TabBtn>))}
          </menu>
          <TabContent selectedTopic={selectedTopic}/>
        </Section>

    )
}