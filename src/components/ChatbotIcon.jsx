const ChatbotIcon = ({ width = 24, height = 24, color = 'currentColor' }) => {
  return (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="4" y="6" width="16" height="12" rx="2" stroke={color} strokeWidth="1.5"/>
        <rect x="9" y="9" width="2" height="2" rx="1" fill={color}/>
        <rect x="13" y="9" width="2" height="2" rx="1" fill={color}/>
        <path d="M9 15H15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 6V4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 4H16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default ChatbotIcon;
