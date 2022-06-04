import "./interests.css";

const Interests = () => {
  return (
    <div>
      <span className="intere-text">Interests</span>
      <div className="interests-container">
        <div className="interests">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="interests">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="interests">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="interests">
          <div className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div>
        <div className="interests">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="interests">
          <div className="content c-plus-plus"></div>
          <h1>c++</h1>
        </div>
        <div className="interests">
          <div className="content c-sharp"></div>
          <h1>c#</h1>
        </div>
        <div className="interests">
          <div className="content kotlin"></div>
          <h1>kotlin</h1>
        </div>
      </div>
    </div>
  );
};

export default Interests;
