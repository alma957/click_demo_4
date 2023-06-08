

export const DemoForm = (): JSX.Element => {
 return (
<div>
        <script src="https://js.storylane.io/js/v1/storylane.js"></script>
        <div className="sl-embed" style={{
    position: 'relative',
    paddingBottom: 'calc(50.56% + 27px)',
    width: '100%',
    height: 0,
    transform: 'scale(1)'
  }}>
         
          <iframe className="sl-demo" src="https://app.storylane.io/demo/0sgegvavg14j" name="sl-embed" allow="fullscreen; camera; microphone"style={{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none'
}} ></iframe>
        </div>
      </div> )
};
