import { Button } from '../components/Button';
import { GenreResponseProps } from '../App'
import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[]
  handleClickButton: Function
  selectedGenreId: number
}

export function SideBar({ 
  genres,
  handleClickButton,
  selectedGenreId
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}