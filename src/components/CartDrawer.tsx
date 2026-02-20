
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CartDrawer = () => {
    const { items, isOpen, toggleCart, updateQuantity, removeFromCart, totalPrice } = useCart();

    const handleCheckout = () => {
        const phoneNumber = "584221790195";

        let message = "╔══════════════════╗\n";
        message += "     *PEDIDO NUEVO*\n";
        message += "   Minimarket Bendito Hogar\n";
        message += "╚══════════════════╝\n\n";

        message += "*Productos solicitados:*\n";
        message += "─────────────────────\n";

        items.forEach((item, index) => {
            const subtotal = (item.price * item.quantity).toFixed(2);
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Cant: ${item.quantity} × $${item.price.toFixed(2)} = *$${subtotal}*\n`;
        });

        message += "─────────────────────\n";
        message += `Artículos: ${items.reduce((acc, item) => acc + item.quantity, 0)}\n`;
        message += `*TOTAL A PAGAR: $${totalPrice.toFixed(2)}*\n\n`;

        message += "*Datos del cliente:*\n";
        message += "Nombre: \n";
        message += "Dirección: \n";
        message += "Método de pago: \n\n";

        message += "_Gracias por comprar en Bendito Hogar_";

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-full sm:max-w-md flex flex-col">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2 font-heading text-2xl">
                        <ShoppingBag className="w-6 h-6 text-primary" />
                        Tu Carrito
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-hidden py-4">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-4">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                                <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="font-heading text-lg font-bold mb-2">Tu carrito está vacío</h3>
                            <p className="text-muted-foreground">¡Agrega algunos productos deliciosos!</p>
                            <Button variant="outline" className="mt-4" onClick={toggleCart}>
                                Seguir comprando
                            </Button>
                        </div>
                    ) : (
                        <ScrollArea className="h-full pr-4">
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 bg-card/50 p-3 rounded-lg border border-border/50">
                                        <div className="w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-heading font-semibold text-foreground line-clamp-1">{item.name}</h4>
                                                <p className="text-sm text-primary font-medium">${item.price.toFixed(2)}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2 bg-background rounded-md border border-input h-8">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-full w-8 rounded-none rounded-l-md hover:bg-muted"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </Button>
                                                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-full w-8 rounded-none rounded-r-md hover:bg-muted"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </Button>
                                                </div>

                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    )}
                </div>

                {items.length > 0 && (
                    <SheetFooter className="sm:flex-col gap-4 border-t pt-4">
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-muted-foreground">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between text-lg font-bold text-foreground">
                                <span>Total</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <Button className="w-full btn-primary h-12 text-lg gap-2" onClick={handleCheckout}>
                            <MessageCircle className="w-5 h-5" />
                            Finalizar Pedido por WhatsApp
                        </Button>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
