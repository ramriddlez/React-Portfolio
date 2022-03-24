import './contact.css'
import Github from'../../img/GitHub-Logo.png'
import LinkedIn from'../../img/lnkdin.png'
import Email from'../../img/email.png'
const Contact = () => {
    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'> Get in touch with me NOW! </h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img
                            src={Github}
                            alt=''
                            className='c-icon-1'
                            />
                            @ramriddlez
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon' src={Email} alt='' />
                            contact@me.com
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon' src={LinkedIn} alt='' />
                            https://www.linkedin.com/in/ramandeep-singh-29b544230/
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                    e Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié
                    </p>
                    <form>
                        <input type='text' placeholder='Name' name='user_name' />
                        <input type='text' placeholder='Subject' name='user_subject' />
                        <input type='text' placeholder='Email' name='user_email' />
                        <textarea rows="5" placeholder='Email' name='user_email' />
                        <button>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact