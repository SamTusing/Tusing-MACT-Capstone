import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import TravelerMap from "./components/TravelerMap";
import ChatbotPanel from "./components/ChatbotPanel";
import YearbookSection from "./components/YearbookSection";
import ResourceCenter from "./components/ResourceCenter";
import CommunityPanel from "./components/CommunityPanel";

function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        
        <Topbar />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          <TravelerMap />
          <ChatbotPanel />
        </div>

        <div style={{ marginTop: "20px" }}>
          <YearbookSection />
        </div>

        <div style={{ marginTop: "20px" }}>
          <ResourceCenter />
        </div>

        <div style={{ marginTop: "20px" }}>
          <CommunityPanel />
        </div>

      </div>
    </div>
  );
}

export default App;