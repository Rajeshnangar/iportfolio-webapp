export default function SocialMedia(props) {
 
  return (
    <> 
      {props.elements.map((content) => {
        return(
        <a key={content.socialIcon} href={content.redirectTo.toString()} className={content.className}>
          <i className={`bx ${content.socialIcon}`} />
        </a>)
      })}
    </>
  );
}
