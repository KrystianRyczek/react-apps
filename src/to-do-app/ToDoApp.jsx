import './styles/styles.css';
import MainSection from './components/MainSection';
import ProjectsSidebar from './components/ProjectsSidebar';
import ToDoAppContextProvider from './store/ToDoAppStateControlers';

export default function ToDoApp() {
    console.log('APP COMPONENT EXECUTING');

    return(
    <main id="to-do-app" >
      <div className="w-fit min-h-210 py-8 flex bg-gray-100 mx-auto">
        <ToDoAppContextProvider>
          <ProjectsSidebar/>
          <MainSection/>
        </ToDoAppContextProvider>
      </div>
    </main>
    )

}