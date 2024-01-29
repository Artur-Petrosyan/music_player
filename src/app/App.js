import '../App.css';
import GlobalStyles from "./assets/styles/globalStyles";
import Flex from "core/ui/components/styled-components/Flex";
import Button from "core/ui/components/styled-components/Button";
import Icon from "core/ui/components/styled-components/Icon";
import playIcon from "./assets/icons/play.svg"
import plusIcon from "./assets/icons/plus.svg"
import Header from "core/ui/components/styled-components/Header";
import Input from "core/ui/components/styled-components/Input";
import SongList from "../core/ui/components/SongList";

function App() {
    return (
        <>
            <GlobalStyles/>
            <div className="App">
                <Header>
                    <Flex justify="space-between">
                        <Flex>
                            <Button>
                                <Flex justify="space-between" align="center">
                                    <Icon src={playIcon}/>
                                    <span>Play All</span>
                                </Flex>
                            </Button>
                            <Button>
                                <Flex justify="space-between" align="center">
                                    <Icon src={plusIcon}/>
                                    <span>Add All</span>
                                </Flex>
                            </Button>
                        </Flex>
                        <Flex justify="space-between" align="center">
                            <Button>Track Number</Button>
                            <Input/>
                        </Flex>
                    </Flex>
                </Header>
                <SongList />
            </div>
        </>
    );
}

export default App;
