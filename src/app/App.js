import '../App.css';
import GlobalStyles from "./assets/styles/globalStyles";
import Flex from "./assets/styles/Flex";
import Button from "./assets/styles/Button";
import Icon from "./assets/styles/Icon";
import playIcon from "./assets/icons/play.svg"
import plusIcon from "./assets/icons/plus.svg"
function App() {
    return (
        <>
            <GlobalStyles/>
            <div className="App">
                <Flex>
                    <Button>
                        <Flex justify="space-between" align="center">
                            <Icon src={playIcon} />
                            <span>Play All</span>
                        </Flex>
                    </Button>
                    <Button>
                        <Flex justify="space-between" align="center">
                            <Icon src={plusIcon} />
                            <span>Add All</span>
                        </Flex>
                    </Button>
                </Flex>
            </div>
        </>
    );
}

export default App;
