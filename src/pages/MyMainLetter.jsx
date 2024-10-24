import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Letter.css'; // Import the notebook-style CSS
import LetterPage from '../components/LetterPage';

const letterContent = `
To the love of my life,

Happy 6th Anniversary mahal ko, I can't believe it's already been that long, really goes to show that when you're with your soul mate and you enjoy their company, time moves infinitely fast. But with how fast everything is going, I still cherish and value every microsecond I spend with you. I know I may not show it all the time, but I do love you so much, and I appreciate you. You mean so much to me. You not only bring more purpose to my life, but you continue to give me endless blessings with love and compassion.

Every year with you, for the lack of a better word, is "Adventurous." I say this because every year I spend with you is full of lessons. You could say I have a master’s PHD in loving you hehe. In these years, I have learned not only to be a better person for myself, but also how to actually love someone, which I think is very important. I know I'm not perfect at it, not really an A student, but hey, at least I know I'm passing since you're still here HAHAHA. Anyways, I just want to highlight a few things I've learned throughout the years with you.

1. I love your smile. That goddamn smile. Thinking about it makes me smile. When we're on call and I know you're smiling, it makes me smile. It's contagious and mesmerizing, and I love it.
2. You're very giving. You love to show you like/love someone by giving. This is especially true with us. Like when I get sick, you go out of your way to give me medicine or all the creative gifts you give me. The thought you put into what you give is amazing, and I really love you for this.
3. I love that you love to eat. HAHAHA. I know it's bad to eat too much, but I really love the times we go out to eat on a random Tuesday night because we're craving HSP. I'm saying this because I love spending time with you while eating. The conversations we have, and just the fact that we're both enjoying the food we're having together, is something I cherish.
4. You're funny. Not much to say here, but I gotta admit you're very funny. But not as funny as me though.
5. Super Supportive. You are the most supportive person I have ever met. I honestly wouldn't be where I am without your support, so for that, thank you.
6. Honestly, this list might go on and on and the formatting on this website might break. So I will make a promise to myself for us to do this little journal thing. I actually enjoy it.

Anyways... I hope you like my letter. I love you so so so much, Jezireah. Happy 6 years to us, and I can't wait to spend many more years with you.

Yours forever,
Chum Chum
`;

const MyMainLetter = () => {
  const navigate = useNavigate();
  return (
    <>
      <LetterPage
        content={letterContent}
        buttonOption={
          <div className="button-container">
            <button className="nav-button" onClick={() => navigate('/open-me')}>{"<- Go Back"}</button>
            <button className="nav-button" onClick={() => navigate('/our-music')}>{"Extra Page ->"}</button>
          </div>
        }
      />
    </>

  );
};

export default MyMainLetter;
