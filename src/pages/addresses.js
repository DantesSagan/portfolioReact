export default function Addresses() {
  return (
    // Addresses section
    <section
      tabIndex='11'
      className='mt-64 mx-auto max-w-screen-lg text-center bg-red-500'
    >
      <div id='dvsection'>
        <header id='profile-header'>Let's_work_together...</header>
        <div className='p-4 contact-link grid grid-cols-3 gap-4 justify-between content-center'>
          <a
            rel='noreferrer'
            className='profile-link'
            href='https://vk.com/id46420996'
            target='_blank'
            tabIndex='12'
          >
            <i className='fab fa-vk'></i>Vkontakte
          </a>
          <a
            rel='noreferrer'
            className='profile-link'
            href='https://www.facebook.com/mihaleksval'
            target='_blank'
            tabIndex='13'
          >
            <i className='fab fa-facebook'></i>Facebook
          </a>
          <a
            rel='noreferrer'
            className='profile-link'
            href='https://soundcloud.com/erkiel-puaro'
            target='_blank'
            tabIndex='14'
          >
            <i className='fab fa-soundcloud'></i>Soundcloud
          </a>
          <a
            rel='noreferrer'
            id='profile-link'
            href='https://github.com/DantesSagan'
            target='_blank'
            tabIndex='15'
          >
            <i className='fab fa-github'></i>Github
          </a>
          <a
            rel='noreferrer'
            className='profile-link'
            href='mailto:mihaleksva@gmail.com'
            target='_blank'
            tabIndex='16'
          >
            <i className='fas fa-at'></i>Email
          </a>
        </div>
      </div>
    </section>
  );
}
