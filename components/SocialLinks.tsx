const socialLinks = [
  {
    icon: 'fab fa-instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/cauavittor'
  },
  {
    icon: 'fab fa-github',
    name: 'GitHub',
    url: 'https://github.com/cauavittor'
  },
  {
    icon: 'fab fa-linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cauavittorbraga'
  }
]

export default function SocialLinks() {
  return (
    <aside>
      <div className="container">
        <div className="social-links">
          <h3>Redes Sociais</h3>
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className={social.icon}></i>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
} 