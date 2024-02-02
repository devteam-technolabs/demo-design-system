import { expect, test } from 'vitest'
import { Card } from '../components/Card';
  // Returns an article element with an image, title and children.
    test('should return an article element with an image, title and children', () => {
        // Arrange
        const img = { src: 'image.jpg', alt: 'Image' };
        const title = 'Title';
        const children = 'Children';
  
        // Act
        const result = Card({ img, title, children });
  
        // Assert
        expect(result.type).toBe('article');
        expect(result.props.children).toHaveLength(3);
        expect(result.props.children[0].type).toBe('img');
        expect(result.props.children[0].props.src).toBe(img.src);
        expect(result.props.children[0].props.alt).toBe(img.alt);
        expect(result.props.children[1].type).toBe('h2');
        expect(result.props.children[1].props.children).toBe(title);
        expect(result.props.children[2]).toBe(children);
      });

          // Displays the image with the correct source and alternate text.
    test('should display the image with the correct source and alternate text', () => {
        // Arrange
        const img = { src: 'image.jpg', alt: 'Image' };
        const title = 'Title';
        const children = 'Children';
  
        // Act
        const result = Card({ img, title, children });
  
        // Assert
        expect(result.props.children[0].props.src).toBe(img.src);
        expect(result.props.children[0].props.alt).toBe(img.alt);
      });