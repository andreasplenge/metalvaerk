import { useState } from "react";

interface GalleryPieceProps {
  image: string;
  title: string;
  description: string;
  additionalImages?: string[];
}

const GalleryPiece = ({ image, title, description, additionalImages = [] }: GalleryPieceProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const allImages = [image, ...additionalImages];
  const hasSecondaryImage = allImages.length > 1;
  const displayedImage = isHovering && hasSecondaryImage ? allImages[1] : allImages[0];

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="flex flex-col animate-fade-in">
      <div 
        className="relative overflow-hidden aspect-square cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClick}
      >
        <img 
          src={displayedImage} 
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
          <h3 className="font-serif text-xl font-light tracking-wider">
            {title}
          </h3>
        </div>
      </div>

      {/* Description below image */}
      {showDescription && (
        <div className="p-6 bg-background">
          <p className="font-sans text-sm leading-relaxed tracking-wide text-foreground">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default GalleryPiece;
