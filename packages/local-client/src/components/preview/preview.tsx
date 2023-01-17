import "./preview.css";
import React, { useEffect, useRef } from "react";

interface PreviewProps {
  code: string;
  bundleStatus: string;
}

const html = `
	<html>
		<head></head>
		<body>
			<div id="root"></div>
			<script>
				const handleError = (err) => {
					const root = document.getElementById('root');
					root.innerHTML = '<div style="color: red; padding: 5px;"><h4>Runtime Error:</h4>' + err.message + '</div>'
					console.error(err);
				}
			
				window.addEventListener('error', (e) => {
					e.preventDefault();
					handleError(e);
				})
				
				window.addEventListener('message', (e) => {
					try {
						eval(e.data);
					} catch(err) {
						handleError(e);
					}
				}, false)
			</script>
		</body>
	</html>
	`;

const Preview: React.FC<PreviewProps> = ({ code, bundleStatus }) => {
  const iframeRef = useRef<any>();

  useEffect(() => {
    // reset the iframe
    iframeRef.current.srcdoc = html;

    const timer = setTimeout(() => {
      // send message to iframe
      iframeRef.current.contentWindow.postMessage(code, "*");
    }, 50);
    return () => {
      clearTimeout(timer);
    };
  }, [code]);

  //console.log(bundleStatus);

  return (
    <div className="preview-wrapper">
      <iframe
        title="Code runner"
        style={{ backgroundColor: "white" }}
        ref={iframeRef}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {bundleStatus && <div className="preview-error">{bundleStatus}</div>}
    </div>
  );
};

export default Preview;
