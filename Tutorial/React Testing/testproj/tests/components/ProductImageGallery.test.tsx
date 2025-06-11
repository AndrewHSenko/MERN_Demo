import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
    it('should have DOM empty', () => {
        const {container} = render(<ProductImageGallery imageUrls={[]} />)
        expect(container).toBeEmptyDOMElement()
    })
    it('should have render list of images', () => {
        const imageUrls = ['url1', 'url2']
        render(<ProductImageGallery imageUrls={imageUrls} />)
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(2)
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url)
        })
        
    })
})